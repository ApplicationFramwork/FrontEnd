import React, {Component} from 'react';
import IndexHeader from "./index-header";
import word from "../images/word.jpg"
import ResearchPaper from "../files/ResearchPaper_Template.docx"
import powerpoint from "../files/PowerPointTemplate.pptx"
import powerpointLogo from "../images/PowerPoint.png"
import calendar2 from "../images/calendar.gif";
import localise from "../images/localise.gif";
class DocumentsDownloadComponent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{background:"black"}}>
                <IndexHeader/>
                <div className="container">
                        <h2 style={{color:"white"}}>Template Download Page</h2>
                        <hr style={{color:"white"}}/>
                        <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={word} style={{width:"100%"}}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <br/>
                                    <button style={{width:"100%"}} className="btn btn-warning">
                                        <a style={{color:"black"}} href={ResearchPaper} download="ResearchTemplate.doc"> Download Research Paper Template </a>
                                    </button>
                                </div>
                            </div>
                            <br/><br/>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={powerpointLogo} style={{width:"100%"}}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <br/>
                                    <button className="btn btn-warning">
                                        <a  style={{color:"black"}}  href={powerpoint} download="PowerPointTemplate.ppt"> Download PowerPoint Template </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h5 style={{color:"white"}}>You can download Research Paper Templates and Powerpoint templates from above links</h5>
                    </div>
                </div>

            </div>
        );
    }
}

export default DocumentsDownloadComponent;