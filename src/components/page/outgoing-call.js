import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Phone from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import VideoComponent from '../video/VideoComponent';

const styles = theme => ({
    root: {
        padding: 24
    },
    header: {
        textAlign: 'left',
        fontSize: 48,
        fontWeight: 400,
        marginBottom: -16,

        marginLeft: 25
    },
    subHeader: {
        textAlign: 'left',
        fontSize: 24,
        marginLeft: 25,
        fontWeight: 200,
        marginBottom: -16
    },
    gridy: {
        display: 'flex',
        flexGrow: 1,
    },
    flexy: {
        flexGrow: 1
    },
    button: {
        flexGrow: 1,
        marginTop: 28
    },
    loadingSpinner: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',

        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.75)",
        zIndex: 8,
    }
});

class OutgoingCall extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {

        }

        this.sendMessageToUser = this.sendMessageToUser.bind(this);
        this.answer = this.answer.bind(this);
        this.cancel = this.cancel.bind(this);
        this.hangup = this.hangup.bind(this);
    }

    componentDidMount() {

    }

    sendMessageToUser(event) {
        console.log("send message")
         this.props.history.push("/sendMessage")
    }

    answer(event) {
        console.log("answer")
    }

    cancel(event) {
        console.log("cancel")
        this.props.history.push("/results")
    }

    hangup() {
        this.props.history.goBack();
    }


    render() {
        return (
            <div>
                <VideoComponent
                    {...this.props.location.state}
                    answer={ this.answer }
                    hangup={ this.hangup }
                    muteVideo
                    />
            </div>
        )
    }
}
export default withStyles(styles)(withRouter(OutgoingCall));
