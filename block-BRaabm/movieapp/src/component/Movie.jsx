import React from "react";
import data from "../data/data";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');

function Movie(){
    let subtitle;
    const [ IsOpen, setIsOpen ] = React.useState(false);
    const [modalData,setModalData]=React.useState({})

    function openModal(title) {
        setIsOpen(true);
        const filterData = data.filter(item => item.Title === title);
        console.log(filterData, 'check')
        setModalData(filterData[0]);
      }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    return(
        <>
        <div className="main">
        {
            data.map((ele)=>{
                const{Images,Title,Released}=ele;
                return(
                    <div className="grid">
                    <img src={Images} alt={Title} width="30%"/>
                    <div>
                    <button onClick={() => openModal(Title)}>More Info</button>
                    </div>
                    <h3>{Title}</h3>
                    <p>{Released}</p>
                    </div>
                )
            })
        }
        {
            IsOpen && 
            (
                <Modal
                isOpen={IsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                  <button onClick={closeModal}>close</button>
                {
                    
                    modalData ? (
                        <>
                            <h2>{modalData.Title}</h2>
                            <h3> Actors-{modalData.Actors}</h3>
                            <p>{modalData.Plot}</p>
                            <h2> Director-{modalData.Director}</h2>
                        </>
                    ) : null
                }
              </Modal>
            )
        }
        </div>
        </>
    )
}

export default Movie;