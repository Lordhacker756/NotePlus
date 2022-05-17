import React from 'react'
import NoteModule from './NoteModule'

const Notes = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <NoteModule/>
      <NoteModule/>
      <NoteModule/>
      <NoteModule/>
    </div>
  </div>
</section>
  )
}

export default Notes