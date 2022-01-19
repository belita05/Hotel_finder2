import styled  from "styled-components";
import {View,Image} from 'react-native';
import  Constants from "expo-constants";
const StatusBarHeight = Constants.StatusBarHeight;
export const Colors ={
    lOrange: "#E3AC1E",
    DOrange: "#E37D1E",
    Red : "#D42727",
    Black: "#000",
    White : "#fff"
};
const {lOrange,DOrange,Red,Black,White} = Colors;

export const StyledContainer =  styled.View`
flex: 1;
padding : 25px;
padding-top:${StatusBarHeight+10}px ;
background-color : ${White};
`
export const InnerContainer = styled.View`
flex : 1;
width : 100%;
align-items : center;
`
export const PageLogo = styled.View`
width : 428px;
height : 99px;
align-items:center;
`
export const SubLogo = styled.View`
width : 307px;
height : 45px;
align-items:center;
`
export const PageTitle = styled.View`
font-size : 100px;
text-align :center;
font-Weight: bold ;
color :${White};
padding : 10;
`;
