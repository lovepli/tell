import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';

import Channel from '../channel/index';
import ArticleList from './left/index';
import Theme from './right/theme/index';
import News from './right/news/index';
import Images from './right/images/index';
import Banner from '../banner/index';
import About from './right/about/index';
import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/11/30
 * @description: 首页
 */
class IndexHome extends Component{

    render() {
        // 获取当前路由
        const pathname = this.props.location.pathname;
        // console.log("home当前路由："+pathname)

        // 获取路由中的可变参数
        const channelName2 = this.props.match.params.channelName;
        // console.log("当前路由中的可变参数："+typeof (channelName2) == undefined ? null : channelName2)

        // 获取当前点击的频道
        const channelName = this.props.state.index.channelName === "推荐" ? null : this.props.state.index.channelName;
        return (
            <div className="content">
                {/*<Channel/>*/}
                {channelName ? null : <Banner/>}
                <Row>
                    <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                        <div className="wrap-left pull-left">
                            <ArticleList/>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
                        <div className="wrap-right pull-right">
                            <Theme/>
                            <News/>
                            <About/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        state: state
    })
)(IndexHome);