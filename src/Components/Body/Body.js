import React from 'react';
import SideBar from './SideBar';
import Info from './Info';
import Item from '../Item/Item';
import '../../Styles/Body.scss';

function Body() {
    return (
        <div className="body">

            <div className='body__left'>
            <SideBar/>
            </div>

            <div className='body__right'>
            <Info/>
            <Item 
            id='123456789'
            photoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-q3eZdXahsnqbkJmr_yTY_VB2ZkZ-TVJB7g&usqp=CAU'
            description='gray couch'
            category='furniture'
            branch='ep'
            dateCollected='12/02/2019'
            donatedBy='Jim Smith'
            donatedTo='Furnishare'
            dateDonated='12/10/2019'
            />
            </div>
        </div>
    )
}

export default Body
