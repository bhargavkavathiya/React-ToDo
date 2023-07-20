import React, { useEffect, useState } from "react";
import './Starred.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";


function Starred() {
    const [star, setStar] = useState(getLocalStar());

    function getLocalStar() {
        const starList = localStorage.getItem('bookmark');
        if (starList) {
            return JSON.parse(localStorage.getItem('bookmark'));
        } else {
            return [];
        }
    }

    function deleteByValue(val) {
        setStar(oldVal => {
            return oldVal.filter(star => star !== val);
        })
    }

    useEffect(() => {
        localStorage.setItem('bookmark', JSON.stringify(star));
    }, [star])
    return (



        <>

            <div className="ParentDiv">
                <div className="star_header">
                    <h1>Starred</h1>
                </div>
                <div className="StarDiv">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {
                                    star.map((val, i) => (
                                        <TableRow key={i} className="mainRow">
                                            <TableCell >{val}</TableCell>
                                            <TableCell >
                                                <div className="delButton">
                                                    <Button size="small" variant="contained" onClick={() => deleteByValue(val)}><DeleteIcon /> </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <div className="Div0">
                {
                    list.map((val, i) => (
                        <div className="Div1">
                            <div className="Div2"><IconButton onClick={() => bookmark(val)}>{!mark.includes(val) && <AiOutlineStar size={25} />}{mark.includes(val) && <AiFillStar size={25} />}</IconButton></div>
                            <div className="Div3">{val}</div>
                            <div className="Div4"><Button size="small" variant="contained" onClick={() => deleteByValue(val)}><DeleteIcon /></Button></div>
                        </div>
                    ))
                }
                </div> */}

                </div>
            </div>
        </>
    )
}
export default Starred;