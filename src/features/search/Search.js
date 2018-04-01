import React from 'react'
import { connect } from 'react-redux'
import { Input, Layout, Row, Col, Carousel } from 'antd'
import { searchImage } from './redux'
import './Search.css'

const enhance = connect(state => state, { searchImage })
const SearchAntD = Input.Search
const { Header, Footer, Sider, Content } = Layout

const Search = props => {
  console.log(props)
  const { searchImage, isLoading, data } = props
  return (
    <div>
      {' '}
      <Header>Image Search</Header>
      <Layout>
        <Content>
          <Sider>Sider</Sider>
          <Row>
            <Col span={12} offset={6}>
              <p>{isLoading ? 'loading' : 'not loading'}</p>
              <SearchAntD
                placeholder="input search text"
                // onChange={e => props.searchImage(e.target.value)}
                onSearch={value => {
                  if (value) {
                    return searchImage(value)
                  }
                  return
                }}
                enterButton
              />
              {data.length ? (
                <Carousel autoplay>
                  {data.map(item => {
                    return (
                      <div key={item.id}>
                        <img src={item.urls.small} alt="" />
                      </div>
                    )
                  })}
                </Carousel>
              ) : (
                <p>No image</p>
              )}
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </div>
  )
}

export default enhance(Search)
