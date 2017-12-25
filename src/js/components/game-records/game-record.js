import React from 'react';
import PropTypes from 'prop-types';
import LocalStorageManager from "../../service/local-storage-manager";

export default class GameRecord extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let key = 0;

        let table = React.createElement('table', null, [
            <tbody key={++key}>
                <tr>
                    <td>No record yet</td>
                </tr>
            </tbody>
        ]);

        let record = LocalStorageManager.getGameRecordBySize(this.props.size);
        if (record !== null) {

            table = React.createElement('table', null, [
                <tbody key={++key}>
                    <tr>
                        <td>Name:</td>
                        <td>{record.name}</td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td>{new Date(record.date).toDateString()}</td>
                    </tr>
                    <tr>
                        <td>Points:</td>
                        <td>{record.points}</td>
                    </tr>
                </tbody>
            ]);
        }

        return table;
    }

}


GameRecord.propTypes = {
    size: PropTypes.string.isRequired
};