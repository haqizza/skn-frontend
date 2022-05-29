<template>
  <div>
    <div v-if="editor" class="mt-6">
      <button class="format-button" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <mdicon name="format-bold" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        <mdicon name="format-italic" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        <mdicon name="format-strikethrough" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        <mdicon name="code-tags" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().clearNodes().run()">
        <mdicon name="format-clear" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        <mdicon name="format-paragraph" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        <mdicon name="format-header-1" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        <mdicon name="format-header-2" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        <mdicon name="format-header-3" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
        <mdicon name="format-header-4" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
        <mdicon name="format-header-5" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
        <mdicon name="format-header-6" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        <mdicon name="format-list-bulleted" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        <mdicon name="format-list-numbered" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        <mdicon name="code-not-equal-variant" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        <mdicon name="format-quote-close" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().setHorizontalRule().run()">
        <mdicon name="arrow-split-horizontal" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().setHardBreak().run()">
        <mdicon name="format-page-break" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().undo().run()">
        <mdicon name="undo" size="20" />
      </button>
      <button class="format-button" @click="editor.chain().focus().redo().run()">
        <mdicon name="redo" size="20" />
      </button>
    </div>
    <editor-content :editor="editor" class="p-4 my-4 border border-solid border-slate-300 rounded-xl" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
