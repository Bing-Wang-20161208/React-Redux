import React, { Component } from 'react'
import { Link/*, Route*/ } from 'react-router-dom';
// import ArticalDetail from './ArticalDetail';

export default class Artical extends Component {
    render() {
        return (
            <div>
                <Link to = "/artical/1?from=artical">文章一</Link>  {/*?显式传参*/}
                <Link to = {{
                    pathname : "/artical/2",
                    state : {
                        from : 'artical'    //隐式传参
                    }
                }}>文章二</Link>
                {/* <Route component = {ArticalDetail} path = "/artical/:id" /> */}
            </div>
        )
    }
}
