import React,{Component} from "react";
import "./news.scss";
import { faFolderOpen,faArrowCircleUp,faTimes, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewsCallendar extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event){
        //console.log(event.target.dataset.id);
        this.props.search(event.target.dataset.id);
    }


    render(){
        console.log(this.props);
        var datanode = this.props.data;
        const groups = function(prop){
            return datanode.reduce(function(datanode,item){
                const val = item[prop];
                datanode[val] = datanode[val] || [];
                datanode[val].push(item);
                return datanode
            },{})
        }
       
     // console.log(groups("Year"));
    ///  console.log(Object.values(groups("Year")));
        return(
            <div className="news-callendar-tile mt-5">
                <h4><span><FontAwesomeIcon className="red arch"  icon={faFolderOpen} style={{color:'#fff'}} size="lg" /></span>Archives</h4>
                <ul>
                    {
                      Object.values(groups("Year")).map(item=>{
                          return(
                              <li data-id={item[0].Year} onClick={this.handleClick}>
                                <span data-id={item[0].Year}>{item[0].Year}</span>
                                <span data-id={item[0].Year}>{item.length}</span>
                              </li>
                            )
                      })
                    }
                </ul>
            </div>
        )
    }
}

export default NewsCallendar;
