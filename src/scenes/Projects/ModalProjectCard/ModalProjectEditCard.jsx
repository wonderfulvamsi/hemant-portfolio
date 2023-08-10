import s from './ModalProjectCard.module.scss';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useModal } from '../../../hooks/modalHook';
import axios from 'axios';

function ModalProjectEditCard() {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [repoLink, setRepoLink] = useState("");
    const [imageLink, setImageLink] = useState("");
    
    const backendLink = "https://hemant-portfolio-backend.netlify.app/.netlify/functions/api"
    
    useEffect(() => {
      const load = async()=>{
        await axios.get(backendLink+"/update_proj/"+id).then(res=>{console.log(res); 
          setTitle(res.data.title);
          setDescription(res.data.description);
          setImageLink(res.data.image);
          setRepoLink(res.data.links[0]);
        });
      }
      load();
    }, [])

    const { isVisible, toggleModal } = useModal();

    //Taking i/p functionality
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
    
      const handleRepoLinkChange = (event) => {
        setRepoLink(event.target.value);
      };
    
      const handleImageLinkChange = (event) => {
        setImageLink(event.target.value);
      };

      const handleSubmit = async () => {
        await axios.put(backendLink+"/update_proj/"+id,{
          title: title,
          description: description,
          image : imageLink,
          links: [repoLink]
        }).then(res=>{console.log(res)})
      }

    useEffect(() => {
      toggleModal();
    }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
    <div style={{ 
    width: '400px', 
    margin: '0 auto', 
    padding: '20px', 
    border: '1px solid #ccc', 
    borderRadius: '5px', 
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    }}>
        <h2 style={{ textAlign: 'center' , margin: '20px', fontSize: '1.5rem'}}>Enter Project Details</h2>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Title:</label>
            <input type="text" value={title} onChange={handleTitleChange} style={{ padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{marginBottom: '5px' }}>Description:</label>
            <textarea value={description} onChange={handleDescriptionChange} style={{ padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{marginBottom: '5px' }}>Repo Link:</label>
            <input type="text" value={repoLink} onChange={handleRepoLinkChange} style={{ padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <label style={{  marginBottom: '5px' }}>Image Link:</label>
            <input type="text" value={imageLink} onChange={handleImageLinkChange} style={{ padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
                style={{ width: '12rem' }}
                className="primary"
                target="_blank"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    </div>
  </Modal>
  )
}

export default ModalProjectEditCard