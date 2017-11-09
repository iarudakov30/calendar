import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash';

import Event from '../Event';
import Spinner from '../Common/Spinner';

import './index.less';

export default class EventsGrid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let events = [];
        this.props.events.forEach((event) => {

            const eventsIntersect = function (event1, event2) {
                let range1 = new Set(_.range(event1.start, event1.start + event1.duration));
                let range2 = new Set(_.range(event2.start, event2.start + event2.duration));
                let intersectRange  = new Set([...range1].filter(x => range2.has(x)));
                return intersectRange.size > 0;
            };

            const getEventsFromRange = function (event) {
                return events.filter(e => (event !== e) && eventsIntersect(e, event));
            };

            const maxOffsetFromEventRange = function (event) {
                let eventsInRange = getEventsFromRange(event);
                let eventOffsets = eventsInRange.map(e => e.offset);

                return eventOffsets.length ? Math.max(...eventOffsets) : undefined;
            };

            let offset = maxOffsetFromEventRange(event);
            event.offset = (offset === undefined) ? 0 : (offset + 1);
            events.push(event);

            events.forEach((event) => {

                let maxIntersect = 1;
                const eventsFromRange = getEventsFromRange(event);
                if (eventsFromRange.length) {
                    maxIntersect += eventsFromRange.length;
                }
                event.width = 90 / maxIntersect;
            });
        });

        const timeBoard = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

        return (
            <div className='calendar'>

            {
                this.props.loading ? (
                    <Spinner loading={this.props.loading}/>
                ) : (

                    <div className='time-board'>
                        {
                            timeBoard.map((item, key) => {

                                return (
                                    <div key={key} className='time-board-hour'>
                                        <div className='large'>
                                            <p>{item}:00</p>
                                        </div>

                                        {
                                            item !==5 ?
                                                <div className='small'>
                                                    <p>{item}:30</p>
                                                </div>
                                                :
                                                ''
                                        }

                                    </div>
                                )
                            })
                        }

                    </div>
                )
            }

            {
                !this.props.loading ? (
                    events.map(event =>
                        <Event
                            key={event._id}
                            title={event.title}
                            start={event.start}
                            duration={event.duration}
                            width={event.width}
                            offset={event.offset}
                            onDelete={this.props.onEventDelete.bind(null,event)}
                        />
                    )
                ) : ''
            }
            </div>
        );
    }
}


EventsGrid.propTypes = {
    loading: PropTypes.bool,
    events: PropTypes.array
};