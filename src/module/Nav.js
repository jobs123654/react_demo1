import React from 'react'
import {Menu,Message} from 'element-react'
import 'element-theme-default'
class Nav extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                <Menu.Item index="1">处理中心</Menu.Item>
                <Menu.SubMenu index="2" title="我的工作台">
                    <Menu.Item index="2-1" >选项1</Menu.Item>
                    <Menu.Item index="2-2">选项2</Menu.Item>
                    <Menu.Item index="2-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item index="3">订单管理</Menu.Item>
            </Menu>
        )
    }
    onSelect(item){
        console.log(item)
    }

}
export default Nav