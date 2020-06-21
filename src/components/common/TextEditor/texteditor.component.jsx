import React, {useState} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

function TextEditor(props) {
  const [text, setText] = useState('')
  ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize ],
        image: {
            toolbar: [ 'imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side' ]
        }
    } )
  return (
    <div>
      <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event,editor) => {
            props.handleChange(event,editor)
          }}
      />
    </div>
  )
}

export default TextEditor
