import React, {Component, useEffect, useState} from 'react';
import {Row, Col} from "antd";
import {Modal} from "antd";
import {Link} from "react-router-dom";
import './file-manager.style.css'
import {useRouteMatch} from 'react-router'

const FileManagerComponent = () =>{
    const {url} = useRouteMatch()
    const [folders, setFolders] = useState(
        [])
    const [folder, setFolder] = useState({name:'', subfolder: {}})
    const [visible, setVisible] =useState(false)
    const addFolders = (folder) =>{
        setFolders([...folders, folder])
        setFolder({name: '', subfolder: {}})
        setVisible(false)
    }
    const route = useRouteMatch()
    useEffect(()=>{
        console.log(route)
    })

    const show = ()=>{
        setVisible(true)
    }
    const close = () =>{
        setVisible(false)
    }
    const handleChange = (e) =>{
        setFolder({name: e.target.value, subfolder: {}})
        console.log(folder)
    }
    return(
        <>
            <Row>
                {folders.map((folder)=>
                    <Col span = {4}>
                        <Link to = {`/${folder.name}`}>
                            <div className="folder">
                                <p>{folder.name}</p>
                            </div>
                        </Link>


                    </Col>
                )}
                <Col span = {4} onClick = {() =>{show()}}>
                    <div className="add-folder">
                        <span>+</span>
                    </div>
                </Col>
            </Row>
            <Modal style={{width: "100px"}} visible={visible} onCancel={close} footer={null}>
                <div style={{width: "100%"}}>
                    <div style={{width: "100%"}}>
                        <input onChange = {(e) => handleChange(e)} value={folder.name} style={{border: '0', width: '90%'}} placeholder="folder name"/>
                    </div>
                    <div style={{width: "70%", marginTop: "10px"}}>
                        <button onClick={()=>{addFolders(folder)}} style={{width: "100%", backgroundColor: 'blue', border: '0', borderRadius: '6px'}}>Add Folder</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default FileManagerComponent;
