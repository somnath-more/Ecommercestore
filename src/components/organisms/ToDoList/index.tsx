import styled from '@emotion/styled'
import { Box, Grid, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MuiTypograpy from '../../atoms/MuiTypograpy'
import MuiButton from '../../atoms/MuiButton'
import MuiTextField from '../../atoms/MuiTextField'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import { AddData, DeleteData, UpdateData, fetchtoDoData } from '../../../services'

const OuterContainer=styled(Grid)({
    height:'500px',
    width:'1000px',
    background:'lightgrey'
})

const SearchContainer=styled(Grid)({
    display:'flex',
    alignItems:'center',
    justifyContent:"space-between"
})
const RenderContainer=styled(Grid)({
    background:'black',
    height:'auto',
    padding:'20px'
})
const InsideContainer=styled(Grid)({   
justifyContent:'space-between',
display:'flex',
marginBottom:'10px',
background:'lightgreen'
})
const handleStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    }
    
const TodoList = () => {
    const [search,setSearchData]=useState("");
    const [todoData,setTodoData]=useState([]);
    const [open,setOpen]=useState<boolean>(false)

    useEffect(()=>{
          fetchtoDoData().then((response)=>{
            console.log(response.data);
            setTodoData(response.data);
          }).catch((err)=>{
           console.log(err);
          })
    },[])
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const searchValue=e.target.value;
        setSearchData(searchValue);

    }
    const handleAddToDO=()=>{
        const data={description:'india',due_date:"5-09-2022"}
        AddData(data).then(()=>{
            console.log('updated succesffully')
        }).catch((error)=>{
           console.log(error)
         })
    }
    const handleUpdate=(id:number)=>{
        const data={description:'new todo',due_date:"5-09-2022"}
        //logic to add todo
        UpdateData(id,data).then(()=>{
            console.log('updated succesffully')
        }).catch((error)=>{
           console.log(error)
         })
    }
    const handleDelete=(id:number)=>{
        DeleteData(id).then(()=>{
            console.log('Deleted succesffully')
        }).catch((error)=>{
           console.log(error)
         })
    }



  return (
    <OuterContainer>
        <MuiTypograpy variant="h2" children={'To Do List'} />
        
         <SearchContainer>
            <MuiButton variant="contained" children={"Add a Todo"} onClick={handleAddToDO} style={{background:'blue'}}/>
            <MuiTextField placeholder='search todo' size='small' value={search} onChange={handleChange} style={{width:"200px"}}/>
         </SearchContainer>
        
         <RenderContainer>
            {
                todoData
                .filter((todo:{description:string})=>todo.description.toLowerCase().includes(search.toLowerCase()))
                .map((todo:{id:number,description:string,due_date:string})=>(
                     <InsideContainer key={todo.id}>
                       <Grid>
                       <MuiTypograpy children={todo.description} variant='body1'/>
                       <MuiTypograpy children={todo.due_date} variant='body1'/>
                       </Grid>
                       <Grid>
                      
                       <MuiButton children={"Edit"}  onClick={()=>handleUpdate(todo.id)} variant="outlined"/>
                       <MuiButton children={"Delete"} variant="outlined" onClick={()=>handleDelete(todo.id)}/>
                       
                        </Grid>
                        </InsideContainer>
                ))
            }
          
         </RenderContainer>


    </OuterContainer>
  )
}

export default  TodoList