import React, { useEffect, useState } from "react";
import './MainPage.css';
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiCheckCircle, BiCircle } from "react-icons/bi";
function MainPage() {
    const [list, setList] = useState(getLocalItems());
    const [task, setTask] = useState();
    const [show, setShow] = useState(false);
    const [mark, setMark] = useState(getLocalBookmarks());
    const [done,setDone]=useState(getLocalDone());

    const navigate = useNavigate();
    function getLocalItems() {
        let localList = localStorage.getItem('dataKey');
        if (localList) {
            return JSON.parse(localStorage.getItem('dataKey'));
        } else {
            return [];
        }
    }

    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(list));
    }, [list]);


    function getLocalBookmarks() {
        let localMark = localStorage.getItem('bookmark');
        if (localMark) {
            return JSON.parse(localStorage.getItem('bookmark'));
        } else {
            return [];
        }
    }
    useEffect(() => {
        localStorage.setItem('bookmark', JSON.stringify(mark));
    }, [mark]);


    useEffect(()=>{
        localStorage.setItem('Done',JSON.stringify(done))
    },[done])

    function getLocalDone(){
        const doneList=localStorage.getItem('Done');
        if(doneList){
            return JSON.parse(doneList);
        }
        else{
            return [];
        }
    }

    function submitBtn() {
        if (task == "") {
            toast.error('Can not enter empty task..', { theme: "light" })
        } else if (list.includes(task)) {
            toast.error('Can not enter same task again...', { theme: "light" })
            setTask('');
        } else {
            setList([...list, task]);
            setTask('');
            toast.success("Task added successfully...");
        }
    }
    function deleteByValue(val) {
        setList(oldValue => {
            return oldValue.filter(list => list !== val)
        })
    }

    function clearAll() {
        if (list.length <= 0) {
            toast.error('No tasks available..', { theme: "colored", })
        }
        else {
            setList([]);
            toast.success('All task deleted..', { theme: "colored", })
        }

    }

    function bookmark(val) {
        if (mark.includes(val)) {
            setMark(OldVal => {
                return OldVal.filter(mark => mark != val);
            })
        } else {
            setMark([...mark, val]);
            toast.success('Bookmarked');
        }


    }

    function taskDone(val){
        if(done.includes(val))
        {
            setDone(oldVal=>{
                return oldVal.filter(done=>done != val);
            })
        }else{
            setDone([...done,val]);
            toast.success('Hurray,Task Done..')
        }
    }


    return (
        <>
            <div className="mainDiv">

                {/* <div className="header">
                    <h1>TO DO</h1>
                </div> */}


                <div className="search">
                    <div className="searchComp1">
                        <input type="text" placeholder="Enter your tasks..." value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>
                    <div className="searchComp2">
                        <Button variant="contained" onClick={() => submitBtn()}>Submit</Button>
                    </div>
                    <div className="searchComp3">
                        <Button variant="contained" onClick={() => clearAll()}>Delete All</Button>
                    </div>
                </div>

                <div className="tableDiv">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {
                                    list.map((val, i) => (
                                        <TableRow key={i} className="mainRow">
                                            <TableCell><IconButton onClick={() => bookmark(val)}>{!mark.includes(val) && <AiOutlineStar size={25} color="black"/>}{mark.includes(val) && <AiFillStar size={25} color="black"/>}</IconButton></TableCell>
                                            <TableCell className="taskCell" >{val}</TableCell>
                                            <TableCell >
                                                <div className="btnDiv">
                                                    {/* <div className="editButton">
                                                        <Button size="small" variant="contained" ><EditIcon /></Button>
                                                    </div> */}
                                                    <div className="delButton">
                                                        <Button size="small" variant="contained" onClick={() => deleteByValue(val)}><DeleteIcon /></Button>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell><IconButton onClick={()=>taskDone(val)}>{!done.includes(val)&& <BiCircle color="black"/>}{done.includes(val)&& <BiCheckCircle color="#3EC70B" />}</IconButton></TableCell>
                                        </TableRow>
                                    ))

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>


                </div>
                
            </div >
        </>
    )
}
export default MainPage;
// export {mark};