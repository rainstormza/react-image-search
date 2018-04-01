import React from 'react'
import { connect } from 'react-redux'
import { Input, Layout, Row, Col } from 'antd'
import { searchImage } from './redux'

const enhance = connect(state => state, { searchImage })
const SearchAntD = Input.Search
const { Header, Footer, Sider, Content } = Layout

const Search = props => {
  // console.log(props)
  return (
    <div>
      {' '}
      <Header>Image Search</Header>
      <Layout>
        <Content>
          <Sider>Sider</Sider>
          <Row>
            <Col span={12} offset={6}>
              <SearchAntD
                placeholder="input search text"
                onChange={e => props.searchImage(e.target.value)}
                onSearch={value => props.searchImage(value)}
                enterButton
              />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </div>
  )
}

export default enhance(Search)
