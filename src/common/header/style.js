import styled from 'styled-components'
import LogoPic from '../../statics/img/logo.png'

export const HeadWrapper = styled.div`
  height:56px;
  z-index:1;
  position:relative;
  border-bottom:1px solid #f0f0f0;
  background-color: #fff;
  border-color: #f0f0f0;
`
export const Logo = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:100%;
  background-image:url(${LogoPic});
  background-size:cover;
`
export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  height:100%;
  padding-right: 50px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:18px;
  font-weight:600;
  cursor: pointer;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color:#969696;
  }
  &.active {
    color:#ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .zoom {
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:50%;
    text-align:center;
    &.focused {
      background: #777;
			color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  box-sizing:border-box;
  width:200px;
  height:38px;
  padding:0 40px 0 20px;
  margin-top:10px;
  border-radius:19px;
  border:none;
  background-color:#eee;
  outline:none;
  margin-left:20px;
  &.focus {
    width:240px;
  }
  &.slide-enter {
    transition:all 0.2s ease-out
  }
  &.slide-enter-active {
    width:240px;
  }
  &.slide-exit {
    transition:all 0.2s ease-out;
  }
  &.slide-exit-active {
    width:200px;
  }
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:100%;
`
export const Button = styled.div`
  float:right;
  padding:0 20px;
  font-size:14px;
  line-height:38px;
  border: 1px solid red;
  margin-top:9px;
  margin-right:20px;
  border-radius:19px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    background-color:red;
    color:#ffff;
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  left:0;
  width:240px;
  padding:0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:12px;
  cursor: pointer;
  .spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`
export const SearchInfoList = styled.div`
  overflow:hidden;
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  font-size:12px;
  border:1px solid #ddd;
  padding:0 5px;
  line-height:20px;
  margin-right:10px;
  margin-bottom:15px;
  color: #787878;
  border-radius:3px;
`