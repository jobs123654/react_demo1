import data from '../Data/data'
import React from 'react'
import {Layout,Table,Input} from 'element-react'
import 'element-theme-default'
class InfoTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            columns:data.column,
            data:data.data
        }
    }
    search(name){
          let result=''
        if (name===''){
            result=data.data
        }else{
            result=this.state.data.filter(e=>e.name.indexOf(name)>-1)
        }
        this.setState({
            data:result
        })
    }

    render() {
        return(
          <div>
              <Layout.Row>
                  <Layout.Col span={24}>
                      <Table columns={this.state.columns} data={this.state.data} maxHeight={200}  style={{width: '100%'}}/>
                  </Layout.Col>
              </Layout.Row>
              <Layout.Row>
                  <Layout.Col span={4}>
                      <Input placeholder="请输入内容"  size="small" onChange={this.search.bind(this)}/>
                  </Layout.Col>
              </Layout.Row>
          </div>
        )
    }
    onSelect(item){
        console.log(item)
    }

}
export default InfoTable