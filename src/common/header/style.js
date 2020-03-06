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
  margin-left:5px;
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