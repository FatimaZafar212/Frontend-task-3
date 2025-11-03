import Details from '@/Components/Details';
import React from 'react'

async function DetailPage ({params}) {

    params = await params; 

  return <Details id={params.id} />
}
export default DetailPage