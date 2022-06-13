import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


export function obfuscate( domain, em_name ) { 
    // Credit to Dan Jurafsky for this function.
    return em_name + '@' + domain;
}

export function leftTooltip(component, text) {
    return (
    <>
        <OverlayTrigger
        key={"left"}
        placement={"left"}
        overlay={
            <Tooltip id={`tooltip-${"left"}`}>
            {text}
            </Tooltip>
        }
        >
        {component}
        </OverlayTrigger>
    </>
    )
}

export function bottomTooltip(component, text) {
    return (
    <>
        <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={
            <Tooltip id={`tooltip-${"bottom"}`} style={{ whiteSpace: 'pre-line' }}>
            {text}
            </Tooltip>
        }
        >
        {component}
        </OverlayTrigger>
    </>
    )
}


export function instructorProfileImgName(name, image_path) {
    return (
        <>
        <Row>
            <img src={image_path} id="profile" alt={name}/>
        </Row>
        <Row style={{paddingTop: '3px'}}>
            <div id="name">{name}</div>
        </Row>
        <style jsx>{`
        #profile {
            width: 125px;
            height: 100px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        #name {
            text-align: center;
        }
      `}</style>
        </>
        
    )
}

export function instructorProfile(name, image_path, homepage, em_domain, em_name) {
    return (
        <>
        <Row>
            <img src={image_path} id="profile" alt={name}/>
        </Row>
        <Row style={{paddingTop: '3px'}}>
            <div id="name">{name}</div>
        </Row>
        <Row>
            <Col></Col>
            {/* Email icon */}
            <Col className='d-flex justify-content-center'>
            {bottomTooltip(<a href={"mailto:" + obfuscate(em_domain, em_name)}>
                <FontAwesomeIcon 
                icon={faEnvelope} 
                size="1x"/>
            </a>, obfuscate(em_domain, em_name))}
            </Col>
            {/* Homepage icon */}
            <Col className='d-flex justify-content-center'>
            {bottomTooltip(<a href={homepage} target="_blank">
                <FontAwesomeIcon 
                icon={faLink} 
                size="1x"/>
            </a>, homepage)}
            </Col>
            <Col></Col>
        </Row>
        <style jsx>{`
        #profile {
            width: 125px;
            height: 100px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        #name {
            text-align: center;
        }
      `}</style>
        </>
        
    )
}