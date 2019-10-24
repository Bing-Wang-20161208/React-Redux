import React, { Component } from 'react';
//没有经过router组件渲染的组件，就需要通过withRouter来使用router功能
import { withRouter } from 'react-router-dom';

class BackHome extends Component {
    goHome = () => {
        // this.props.history.push("/home");
        this.props.history.push ({
            pathname : '/home',
            state : {
                id : this.props.match.params.id
            }
        })
    }
    render() {
        return (
            <div>
                文章详情 {this.props.match.params.id}
                <button onClick = {this.goHome}>返回首页</button>
            </div>
        )
    }
}
export default withRouter(BackHome);