import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden
`
export const HomeLeft = styled.div`
  float:left;
  width:625px;
  padding-top:30px;
  margin-left:15px;
  .banner-img {
    width:100%;
    height:270px;
    border-radius:10px;
  }
`
export const ListItem = styled.div`
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  padding:20px 0;
  cursor: pointer;
  .pic {
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:5px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title {
    line-height:30px;
    font-size:18px;
    font-weight:600;
    color:#333;
  }
  .desc {
    line-height:24px;
    font-size:12px;
    color:#999;
  }
`
export const HomeRight = styled.div`
  float:right;
  width:280px;
  margin-left:40px;
  padding-top:26px;
  min-height: 228px;
  .right-item{
    width:100%;
    height:50px;
    margin-bottom:10px;
  }
`
export const LoadMore = styled.div`
  width:100%;
  height: 40px;
  background-color :red;
  color:#ffff;
  line-height:40px;
  text-align:center;
  margin-top:20px;
  font-size:18px;
  border-radius:15px;
  cursor: pointer;
`
export const BackTop = styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  width:60px;
  height:60px;
  font-size:14px;
  text-align:center;
  line-height:60px;
  border:1px solid red;
  border-radius:50%;
`