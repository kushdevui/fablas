import React,{Component} from 'react';
import Header from "../Header/header"
import InnerHeader from "../../container/InnerHeader/innerHeader"; 
import SectionHeading from "../../container/SectionHeading/sectionHeading"
import ServiceItem from "../../components/Services/ServicesItem/servicesItem";
import Modal from 'react-responsive-modal';
import Footer from "../Footer/footer";


import './services.scss';



class Services extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            modalTitle:"",
            modalDesc:"",
            modalImage:""
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleModalContent = (data) =>{
      this.setState({
          modalTitle:data.title,
          modalImage:data.image,
          modalDesc:data.description
      })
    }


    render(){
        const { open } = this.state;
        const services = [
       
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><title>FMCG</title><path d="M216,336a24,24,0,1,0,24-24A24,24,0,0,0,216,336Zm24-8a8,8,0,1,1-8,8A8,8,0,0,1,240,328Z"/><path d="M128,336a24,24,0,1,0,24-24A24,24,0,0,0,128,336Zm24-8a8,8,0,1,1-8,8A8,8,0,0,1,152,328Z"/><path d="M125.22,264.18A23.86,23.86,0,0,0,112,285.55V304a8,8,0,0,0,8,8H272V296H128V285.55a8,8,0,0,1,6.69-7.89l130.63-21.77A8,8,0,0,0,272,248V192a8,8,0,0,0-8-8H117.29l-5.65-18.35A8,8,0,0,0,104,160H64v16H98.09Zm58.78-11L167.16,256l-6.22-56H184ZM200,200h22.94l-6,47.73-17,2.83Zm56,41.22L233.44,245l5.62-45H256ZM144.84,200l6.52,58.66-10.55,1.77L122.21,200Z"/><path d="M384,0C327.69,0,281.08,41.82,273.28,96H8a8,8,0,0,0-8,8V408a8,8,0,0,0,8,8H200v32H128a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H368a8,8,0,0,0,8-8V456a8,8,0,0,0-8-8H296V416H488a8,8,0,0,0,8-8V112A112.12,112.12,0,0,0,384,0Zm96,112a96.07,96.07,0,0,1-61.95,89.65c5.95-9,11-20.32,14.75-33.73a23.89,23.89,0,0,0,6.87-46.55c.12-3.12.33-6.22.33-9.37,0-37.18-8.66-69.48-22.21-89.74A96.06,96.06,0,0,1,480,112ZM384,224a111.31,111.31,0,0,0,64-20.21V368H48V144H276.72A112.16,112.16,0,0,0,384,224ZM336,72a8,8,0,1,1-8,8A8,8,0,0,1,336,72Zm8.34,30.43A23.83,23.83,0,0,0,350.46,61C356.38,39.46,365.88,23.8,376,18.23V205.66c-16.4-9.1-32-45-32-93.66C344,108.78,344.2,105.61,344.34,102.43ZM432,152a8,8,0,1,1,8-8A8,8,0,0,1,432,152Zm-8.34-30.43A23.83,23.83,0,0,0,417.54,163c-5.92,21.51-15.42,37.17-25.54,42.73V18.33c16.4,9.11,32,45,32,93.67C424,115.22,423.8,118.39,423.66,121.57ZM350,22.35c-5.95,9-11,20.32-14.75,33.73a23.89,23.89,0,0,0-6.87,46.55c-.12,3.12-.33,6.21-.33,9.37,0,37.18,8.66,69.48,22.21,89.74A95.84,95.84,0,0,1,350,22.35ZM360,480H136V464H360Zm-80-32H216V416h64Zm200-48H16V112H272a111,111,0,0,0,1.28,16H40a8,8,0,0,0-8,8V376a8,8,0,0,0,8,8H456a8,8,0,0,0,8-8V190.23a112.47,112.47,0,0,0,16-20.84Z"/></svg>,
                title:"FMCG/B2B/ E-commerce",
                description:"We provide G.T., M.T., Cosmetics, Online retails, B2B combo offers and 3rd Party private labels."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 323.87"><title>Automobile</title><path d="M476.16,231.36l-13.26-53a8,8,0,0,0,6.34-7.84v-8.55a33.7,33.7,0,0,0-33.67-33.67H375.18V110.63a16.58,16.58,0,0,0-16.57-16.57H50.77A16.59,16.59,0,0,0,34.2,110.63V256a8,8,0,0,0,16,0V110.63a.53.53,0,0,1,.53-.53H358.61a.53.53,0,0,1,.54.53V256a8,8,0,1,0,16,0v-9.09h94.61a26.23,26.23,0,0,1,24.91,18.18H469.78a8,8,0,0,0-8,8v17.1a25.14,25.14,0,0,0,25.12,25.12H496V350.6H475a50.75,50.75,0,0,0-96,0h-3.86V290.2a8,8,0,0,0-16,0v60.39H192.82a50.76,50.76,0,0,0-96,0H50.77a.53.53,0,0,1-.53-.53V332.42H85a8,8,0,0,0,0-16H8a8,8,0,1,0,0,16H34.21v17.64a16.58,16.58,0,0,0,16.56,16.57H94.08c0,.18,0,.35,0,.53a50.78,50.78,0,0,0,101.55,0c0-.18,0-.35,0-.53H376.26c0,.18,0,.35,0,.53a50.77,50.77,0,0,0,101.54,0c0-.18,0-.35,0-.53H504a8,8,0,0,0,8-8V273.1A42.3,42.3,0,0,0,476.16,231.36Zm-101-87.06h60.39a17.66,17.66,0,0,1,17.64,17.64v.53h-78Zm0,86.58V178.51h71.24l13.09,52.37Zm-230.34,171a34.74,34.74,0,1,1,34.73-34.74A34.77,34.77,0,0,1,144.84,401.9Zm282.18,0a34.74,34.74,0,1,1,34.74-34.74A34.78,34.78,0,0,1,427,401.9Zm69-102.61h-9.09a9.09,9.09,0,0,1-9.08-9.09v-9.08H496v18.17Z" transform="translate(0 -94.06)"/><path d="M144.84,350.6a16.57,16.57,0,1,0,16.56,16.56A16.58,16.58,0,0,0,144.84,350.6Z" transform="translate(0 -94.06)"/><path d="M427,350.6a16.57,16.57,0,1,0,16.57,16.56A16.58,16.58,0,0,0,427,350.6Z" transform="translate(0 -94.06)"/><path d="M333,316.39H213.24a8,8,0,0,0,0,16H333a8,8,0,0,0,0-16Z" transform="translate(0 -94.06)"/><path d="M127.73,282.19H25.12a8,8,0,1,0,0,16H127.73a8,8,0,1,0,0-16Z" transform="translate(0 -94.06)"/><path d="M278.77,173.37a8,8,0,0,0-11.34,0l-71.29,71.29-37.09-37.09a8,8,0,0,0-11.33,11.34l42.75,42.76a8,8,0,0,0,11.34,0l77-77A8,8,0,0,0,278.77,173.37Z" transform="translate(0 -94.06)"/></svg>,
                title:"Automobile",
                description:"Serving your Auto Care needs, because so much is riding on your tires. Our auto care products ensure your automobile is always in the best possible condition. From Fresh Cotton Cloth for Workshop and Auto Accessories industry to efficient Car Wash, Fablas provides  end-to end automotive cleaning solutions."
            },
            
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 480.62"><title>material-sourcing</title><path d="M490,341.13H448a22,22,0,0,0-22,22v57.05H86V363.13a22,22,0,0,0-22-22H22a22,22,0,0,0-22,22v81.56a52,52,0,0,0,51.93,51.93H460.07A52,52,0,0,0,512,444.69V363.13A22,22,0,0,0,490,341.13Zm2,103.56a32,32,0,0,1-31.93,31.93H51.93A32,32,0,0,1,20,444.69V363.13a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v67.05a10,10,0,0,0,10,10H436a10,10,0,0,0,10-10V363.13a2,2,0,0,1,2-2h42a2,2,0,0,1,2,2Z" transform="translate(0 -16)"/><path d="M119,132.73h18.22V250a10,10,0,0,0,10,10h43.17a10,10,0,0,0,10-10V132.73h18.21A26.48,26.48,0,0,0,239.43,90l-49.8-63.77a26.48,26.48,0,0,0-41.74,0L98.09,90A26.48,26.48,0,0,0,119,132.73Zm-5.1-30.47,49.8-63.77a6.48,6.48,0,0,1,10.21,0l49.8,63.77a6.47,6.47,0,0,1-5.11,10.47H190.35a10,10,0,0,0-10,10V240H157.18V122.73a10,10,0,0,0-10-10H119a6.48,6.48,0,0,1-5.1-10.47Z" transform="translate(0 -16)"/><path d="M322.37,249.81a26.48,26.48,0,0,0,41.74,0L413.91,186A26.48,26.48,0,0,0,393,143.26H374.82V26a10,10,0,0,0-10-10H321.65a10,10,0,0,0-10,10V143.26H293.44A26.48,26.48,0,0,0,272.57,186ZM287.61,166.9a6.32,6.32,0,0,1,5.83-3.64h28.21a10,10,0,0,0,10-10V36h23.17V153.26a10,10,0,0,0,10,10H393a6.48,6.48,0,0,1,5.1,10.47l-49.8,63.77a6.48,6.48,0,0,1-10.21,0l-49.8-63.77A6.32,6.32,0,0,1,287.61,166.9Z" transform="translate(0 -16)"/><path d="M373.85,276.42H138.15a29.53,29.53,0,0,0,0,59.06h235.7a29.53,29.53,0,0,0,0-59.06Zm0,39.06H138.15a9.53,9.53,0,0,1,0-19.06h235.7a9.53,9.53,0,0,1,0,19.06Z" transform="translate(0 -16)"/><path d="M138.15,369H263.24a10,10,0,0,0,0-20H138.15a29.53,29.53,0,1,0,0,59.06h235.7a29.53,29.53,0,0,0,0-59.06H343.24a10,10,0,0,0,0,20h30.61a9.53,9.53,0,0,1,0,19.06H138.15a9.53,9.53,0,0,1,0-19.06Z" transform="translate(0 -16)"/><path d="M313.26,359a10,10,0,0,0-10-10h0a10,10,0,1,0,10,10Z" transform="translate(0 -16)"/></svg>,
                title:"Material Sourcing",
                description:"We arrange 3rd party outsourcing for promotional activities and product launches."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.67 512"><title>personal-care</title><path d="M180.12,150a10,10,0,0,0-10-10h-.24a10,10,0,0,0,0,20h.24A10,10,0,0,0,180.12,150Z" transform="translate(-50)"/><path d="M229.88,160h.24a10,10,0,0,0,0-20h-.24a10,10,0,0,0,0,20Z" transform="translate(-50)"/><path d="M200,210a38,38,0,0,0,27.07-11.21,10,10,0,1,0-14.14-14.15,18.28,18.28,0,0,1-25.86,0,10,10,0,1,0-14.14,14.15A38,38,0,0,0,200,210Z" transform="translate(-50)"/><path d="M452.67,411H421V379.33a10,10,0,0,0-10-10H371.71a10,10,0,0,0-10,10V411H350V271.43a10,10,0,0,0-7.25-9.61L320,255.32V120A120.13,120.13,0,0,0,200,0a10,10,0,0,0,0,20A100.11,100.11,0,0,1,300,120V249.6l-49-14h0l-1.53-.44A90,90,0,0,0,290,160V120.85a10,10,0,0,0-10-10c-26.21,0-35.81-8.95-51.34-35.85a10,10,0,0,0-17.32,0c-14.25,24.68-63.59,33.87-91.34,33.87a10,10,0,0,0-10,10V160a90,90,0,0,0,40.55,75.16L100,249.6V120a100.59,100.59,0,0,1,40.63-80.33,10,10,0,1,0-11.92-16.06A120.68,120.68,0,0,0,80,120V255.32l-22.75,6.49A10,10,0,0,0,50,271.43V502a10,10,0,0,0,10,10H211a10,10,0,0,0,0-20h-1V467.48l46.18-92.9a10,10,0,0,0,.31-8.21L241.75,330l24.18-20.28a10,10,0,0,0,3.37-9.63l-8.2-40.8L330,279V411a10,10,0,0,0-10,10v39.25a10,10,0,0,0,10,10V492H290V416.27c9.71-8.61,15.75-24,15.75-41.19,0-19.6-7.76-35.78-20.75-43.28a10,10,0,0,0-10,17.32c6.63,3.83,10.75,13.77,10.75,26S281.23,399,275,402.57a10,10,0,0,0-5,8.66V502a10,10,0,0,0,10,10h60a10,10,0,0,0,10-10V470.29h11.71V502a10,10,0,0,0,10,10H411a10,10,0,0,0,10-10V470.29h31.71a10,10,0,0,0,10-10V421A10,10,0,0,0,452.67,411ZM160.54,253.1l2.43-.69,19.17,71.53-30.67-25.73Zm13.82,90.42L190,356.64v65.9l-26.26-52.83Zm8.21-95.22a90.15,90.15,0,0,0,34.85,0l-17.42,65ZM130,160V128.55c26.41-1.61,66.58-9.57,88.92-31.21,13.31,20,26.83,30.86,51.08,33.08V160a70.11,70.11,0,0,1-43.23,64.67,8.48,8.48,0,0,0-.88.35,69.75,69.75,0,0,1-51.79,0q-.4-.18-.84-.33A70.1,70.1,0,0,1,130,160Zm0,332V411.23a10,10,0,0,0-5-8.66c-6.23-3.6-10.75-15.16-10.75-27.49s4.12-22.13,10.75-26a10,10,0,1,0-10-17.32c-13,7.5-20.75,23.68-20.75,43.28,0,17.17,6,32.58,15.75,41.19V492H70V279l68.9-19.68-8.2,40.8a10,10,0,0,0,3.37,9.63L158.25,330l-14.74,36.37a10,10,0,0,0,.31,8.21L190,467.48V492ZM236.26,369.71,210,422.54v-65.9l15.64-13.12Zm12.26-71.5-30.66,25.73L237,252.41l2.43.69ZM442.67,450.29H411a10,10,0,0,0-10,10V492H381.71V460.29a10,10,0,0,0-10-10H340V431h31.71a10,10,0,0,0,10-10V389.33H401V421a10,10,0,0,0,10,10h31.71Z" transform="translate(-50)"/><path d="M258.34,502a10,10,0,1,1-10-10A10,10,0,0,1,258.34,502Z" transform="translate(-50)"/><path d="M169.34,18a10,10,0,1,1-10-10A10,10,0,0,1,169.34,18Z" transform="translate(-50)"/></svg>,
                title:"Personal Care",
                description:"Our company is dedicated to our customers by providing exceptional cleaning products for Aroma Care/Beauty & Spa Saloons, Therapy  and Skin care Centres. At Fablas, we continue our reputation for excellence and customer satisfaction by maintaining our focus on our core vision and mission."
            },
            
        ]
    
    const renderServices = () =>{
        return services.map(item=>{
            return(<div className="col-lg-3 mb-3 services-item" onClick={this.onOpenModal}>
                    <ServiceItem handleModalClick={this.handleModalContent} data={item} />
            </div>)
        })
    }
    return(
        <div className="tile-services">
            <Header/>
            <InnerHeader title="Our Services" subTitle="What We Do !"/>
            <SectionHeading title="OUR SERVICES" subTitle="We work across varied verticals and industries "/>
            <div className="container">
                <div className="row mt-3">
                <Modal  open={open} onClose={this.onCloseModal} center>
                    <div className="modal-body-full">
                    <div className="icon">
                        {this.state.modalImage}
                    </div>
                    <h4 className="pt-2 pb-2">{this.state.modalTitle}</h4>    
                    <p>{this.state.modalDesc}</p>
                    </div>
                   
            </Modal>
                {renderServices()}
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Services;