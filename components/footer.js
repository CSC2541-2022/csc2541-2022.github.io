import React from 'react';

export default function PageFooter() {
  return (
    <>
    <br></br>
    <br></br>
    <footer id="footer">
      <table>
        <tr>
          <td id="tableCol">
            <p>Made with &#10084;&#65039; by the CSC2541 Course Staff.</p>
          </td>
        </tr>
      </table>
    </footer>
    <style jsx>{`
    #tableCol {
      padding-top: 10px;
      padding-left: 15px;
    }

    #footer {
      position: sticky;
      left: auto;
      right: auto;
      bottom: 0;
      height: 50px;
      width: 100%;
      border-top: double;
    }
        
    #heart {
        text-decoration: none;
        cursor: text;
    }
      `}</style>
    </>
  )
}