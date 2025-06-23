import React from 'react'
import { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import { getRecipeFromMistral } from '../assets/ai';

function Main() {
  let [ingredients, setIngredients] = useState([]);
  let [recipeShown, setRecipeShown] = useState("");
  function Submit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    const formData = new FormData(el);
    const ingeredient = formData.get("item");
    setIngredients(prevIngredients => [...prevIngredients, ingeredient]);
    el.reset();
  }
  async function toggleRecipe() {
    const answer = await getRecipeFromMistral(ingredients)
    setRecipeShown(answer)
  }

  return (
    <div
      className='Main'
      style={{
        maxWidth: '540px',
        margin: '40px auto',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(252,182,159,0.18)',
        padding: '36px 32px',
        fontFamily: "'Quicksand', 'Segoe UI', sans-serif",
      }}
    >
      <form
        onSubmit={Submit}
        className='add_ingredient'
        style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <input
          type='text'
          name='item'
          placeholder='e.g. oregano'
          aria-label='Add ingredient'
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '14px',
            border: '1.5px solid #ffb199',
            fontSize: '1.1rem',
            outline: 'none',
            background: '#fff8f3',
            transition: 'border 0.2s',
          }}
        />
        <button
          style={{
            background: 'linear-gradient(90deg, #ffb199 0%, #ff7043 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '14px',
            padding: '12px 22px',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #ff704344',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.target.style.background = '#ff7043')}
          onMouseOut={e => (e.target.style.background = 'linear-gradient(90deg, #ffb199 0%, #ff7043 100%)')}
        >
          Add Ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <div
          style={{
            marginBottom: '28px',
            padding: '16px',
            background: '#fff3e6',
            borderRadius: '14px',
            boxShadow: '0 1px 4px #ff704322',
          }}
        >
          <Section1 ingeredient={ingredients} toggleRecipe={toggleRecipe} />
        </div>
      )}
      {recipeShown && (
        <div
          style={{
            marginTop: '24px',
            padding: '18px',
            background: '#ffe0cc',
            borderRadius: '14px',
            boxShadow: '0 1px 4px #ff704322',
          }}
        >
          <Section2 recipe={recipeShown} />
        </div>
      )}
    </div>
  )
}

export default Main;