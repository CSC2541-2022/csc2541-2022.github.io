import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { bottomTooltip } from '../../helpers';

export default function ConvNetDemo() {
  var demo_html_raw = "<!DOCTYPE html><html lang='en'><head><link rel='stylesheet' type='text/css' href='style.css' /><script src='convnet_demo/convnet-min.js'></script><script src='convnet_demo/convnet_demo.js'></script><script>function page_loaded() {$('#convask').click(function(){$('#explain').slideToggle('fast');})start_convnet_demo();}</script></head><body onload='page_loaded()'><div id='teaser'><div id='convnetvis'></div><div id='demomsg'>*This network is running <a href='https://cs.stanford.edu/people/karpathy/convnetjs/' target='_blank'>live in your browser</a>.</div></div><!-- jQuery and Boostrap --><script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script></body></html>";
  var demo_html = { __html: demo_html_raw };

  return (
    <>
    <div align="right">
    {bottomTooltip(<a href={"http://cs231n.stanford.edu"} target="_blank">
                <FontAwesomeIcon 
                icon={faInfoCircle} 
                size="1x"/>
            </a>
      , "Inspired by (and adapted from) Andrej Karpathy's CS231N homepage.")}
      </div>
    <div dangerouslySetInnerHTML={demo_html} />
    </>
  )
}