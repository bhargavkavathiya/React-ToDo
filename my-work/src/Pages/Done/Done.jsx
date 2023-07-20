
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import './Done.css'
import { toast } from "react-toastify";


function Done() {
    const [done,setDone]=useState(getLocalDone());

    function getLocalDone(){
        const res=localStorage.getItem('Done');
        if(res){
            return JSON.parse(res);
        }
        else{
            return [];
        }
    }

    useEffect(()=>{
        localStorage.setItem('Done',JSON.stringify(done));
    },[done]);

    function deleteByValue(val){
        setDone(values=>{
            return values.filter(done => done!=val);
        })
    }
    return (
        <>
           <div className="done_ParentDiv">
           <div className="done_header">
                    <h1>Done</h1>
                </div>
            <div className="done_div">
                <TableContainer>
                    <Table>
                        <TableBody>
                            {
                                done.map((val, i) => (
                                    <TableRow key={i} className="mainRow">
                                        <TableCell >{val}</TableCell>
                                        <TableCell >
                                            <div className="delButton">
                                                <Button size="small" variant="contained" onClick={() => deleteByValue(val)} ><DeleteIcon /> </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </div>
            
        </>
    )
}
export default Done;