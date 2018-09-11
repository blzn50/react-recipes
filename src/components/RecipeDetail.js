import React from 'react';

const RecipeDetail = props => (
  <div style={props.style}>
    <h2>Heading</h2>
    <img
      width="40%"
      src="https://content1.jdmagicbox.com/def_content/sweet_shops/default-sweet-shops-6.jpg"
    />
    <div>
      <span>Sweets</span>
      <span>120 cal</span>
      <h3>Ingredients</h3>
      <ul>
        <li>water</li>
        <li>flour</li>
        <li>sugar</li>
        <li>milk</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>put water in bowl</li>
        <li>put flour in bowl</li>
        <li>put sugar in bowl</li>
        <li>put milk in bowl</li>
      </ol>
    </div>
  </div>
);

export default RecipeDetail;
