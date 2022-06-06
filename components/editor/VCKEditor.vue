<template>
  <ckeditor
    v-model="editorData"
    :editor="editor"
    :config="editorConfig"
  ></ckeditor>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";

// less Heading + Essentials plugin can't input the text
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";

import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageResizeEditing from "@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting";
import ImageResizeHandles from "@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";

import BalloonBlockEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import BlockToolbar from "@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar.js";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder.js";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";

export default {
  name: "VCKEditor",
  components: { ckeditor: CKEditor.component },
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    editorData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        plugins: [
          Bold,
          Italic,
          Underline,
          Strikethrough,
          Heading,
          Essentials,
          ImageUpload,
          ImageInsert,
          AutoImage,
          Image,
          ImageResizeEditing,
          ImageResizeHandles,
          Base64UploadAdapter,
          BalloonBlockEditor,
          Autoformat,
          BlockQuote,
          BlockToolbar,
          CKFinderUploadAdapter,
          CloudServices,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          Indent,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          PasteFromOffice,
          Table,
          TableToolbar,
          TextTransformation,
          CKFinder,
        ],

        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|",
            "insertImage",
            "link",
          ],
        },
        language: "vi",
        blockToolbar: [],
        image: {
          toolbar: [
            "imageTextAlternative",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
          ],
        },
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
      },
    };
  },
};
</script>
