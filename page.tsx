'use client'
import Loader from '@/app/components/Loader/Loader' ;
import { useLoadUserQuery from • Q/ redux/ features,tapi/apiS1ice• ;
import { redirect from •next/navigation•;
import React, { useEffect from ' react
import CourseContent from
/.. /components/Cou rse/CourseContent. tsx" ;
type Props = {
params: any;
const page = ({params}: Props) {
. _ id ld);
const id params. id;
const
if(data){
const isPurchased
! isPu
redirect( "/" ) ;
if (error) {
redirect( " /" ) ;
(data, error] ) ;
return (
= useLoadUserQuery(undefined, ;
= data. user. courses. find( (item:any) item