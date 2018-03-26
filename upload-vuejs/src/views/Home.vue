<template>
  <div class="home">

    <!--<single-file/>-->
    <!--<multiple-files/>-->
    <!--<select-files/>-->
    <!--<file-preview/>-->
    <!--<file-multiple-preview/>-->
    <!--<file-progress/>-->
    <drag-and-drop/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import SingleFile from '@/components/SingleFile'
import MultipleFiles from '@/components/MultipleFiles'
import SelectFiles from '@/components/SelectFiles'
import FilePreview from '@/components/FilePreview'
import FileMultiplePreview from '@/components/FileMultiplePreview'
import FileProgress from '@/components/FileProgress'
import DragAndDrop from '@/components/DragAndDrop'

export default {
  name: 'home',
  components: {
      SingleFile,
      MultipleFiles,
      FilePreview,
      SelectFiles,
      FileMultiplePreview,
      FileProgress,
      DragAndDrop
  }
}
</script>
