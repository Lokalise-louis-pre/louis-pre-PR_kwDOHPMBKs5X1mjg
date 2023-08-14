"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[5512],{"./src/components/Dropzone/Dropzone.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MaxFileSizeTemplate:()=>MaxFileSizeTemplate,Template:()=>Template,default:()=>Dropzone_stories,defaultStory:()=>defaultStory,maxSize:()=>maxSize,mimeTypes:()=>Dropzone_stories_mimeTypes,singleFileSelection:()=>singleFileSelection});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),es=__webpack_require__("./node_modules/react-dropzone/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dropzone=({children,onDrop,onDragEnter,onDragOver,onDragLeave,multiple=!0,accept,maxSize=1/0,name="dropzone"})=>{const mimeTypes=Array.isArray(accept)?Object.fromEntries(accept.map((key=>[key,[]]))):accept,state=(0,es.uI)({onDrop,multiple,accept:mimeTypes,onDragEnter,onDragOver,onDragLeave,maxSize}),{getInputProps}=state;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children(state),(0,jsx_runtime.jsx)("input",{...getInputProps(),name,"aria-label":name})]})};try{Dropzone.displayName="Dropzone",Dropzone.__docgenInfo={description:"",displayName:"Dropzone",props:{children:{defaultValue:null,description:"Dropzone UI",name:"children",required:!0,type:{name:"(state: DropzoneState) => Element"}},onDrop:{defaultValue:null,description:"Callback event on file(s) select/drop",name:"onDrop",required:!1,type:{name:"(<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void)"}},onDragEnter:{defaultValue:null,description:"Drag enter event handler",name:"onDragEnter",required:!1,type:{name:"DragEventHandler"}},onDragOver:{defaultValue:null,description:"Drag over event handler",name:"onDragOver",required:!1,type:{name:"DragEventHandler"}},onDragLeave:{defaultValue:null,description:"Drag over event handler",name:"onDragLeave",required:!1,type:{name:"DragEventHandler"}},multiple:{defaultValue:{value:"true"},description:"Allow multiple files for select/drop",name:"multiple",required:!1,type:{name:"boolean"}},accept:{defaultValue:{value:"undefined"},description:"Array of mimetypes allowed for select/drop events. If not specified, all file types will be accepted.",name:"accept",required:!1,type:{name:"string[]"}},maxSize:{defaultValue:null,description:"Maximum file size (in bytes)",name:"maxSize",required:!1,type:{name:"number"}},name:{defaultValue:{value:"dropzone"},description:"Name attribute for file input field.",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropzone/Dropzone.tsx#Dropzone"]={docgenInfo:Dropzone.__docgenInfo,name:"Dropzone",path:"src/components/Dropzone/Dropzone.tsx#Dropzone"})}catch(__react_docgen_typescript_loader_error){}const ImageMimeType=["image/avif","image/bmp","image/gif","image/vnd.microsoft.icon","image/jpeg","image/png","image/svg+xml","image/tiff","image/webp"];var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const YourStyledComponent=styled_components_browser_esm.ZP.div.withConfig({displayName:"Dropzone__YourStyledComponent",componentId:"sc-uvejmq-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;padding:",";border-radius:",";font-family:",";background-color:",";border:2px dashed ",";transition:border-color ease-in-out ",",background-color ease-in-out ",";cursor:pointer;",";",""],(0,theme.W0)(4),(0,theme.S3)("radius.m"),(0,theme.S3)("font.family.graphik"),(0,theme.S3)("color.background.surface.middle"),(0,theme.S3)("color.border.default"),(0,theme.S3)("transition.default"),(0,theme.S3)("transition.default"),(0,modifier.c)("isDragAccept",styled_components_browser_esm.iv`
			border-color: ${(0,theme.S3)("color.border.active")};
			background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
		`),(0,modifier.c)("isDragReject",styled_components_browser_esm.iv`
			border-color: ${(0,theme.S3)("color.background.action.danger.default")};
			background-color: ${(0,theme.S3)("color.background.danger")};
		`)),Template=({children,...rest})=>(0,jsx_runtime.jsx)(Dropzone,{...rest,children:state=>children(state)}),MaxFileSizeTemplate=({children,onDrop})=>(0,jsx_runtime.jsx)(Dropzone,{maxSize:1048576,accept:ImageMimeType,multiple:!1,onDrop:(acceptedFiles,fileRejections,event)=>{fileRejections.length&&alert("File size exceeds 1MB! it will not be uploaded. Check onDrop event callback in actions panel for more info."),onDrop(acceptedFiles,fileRejections,event)},children:state=>children(state)});const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)("p",{children:"All files will be accepted"}),isDragReject&&(0,jsx_runtime.jsx)("p",{children:"Some files will be rejected"}),!isDragActive&&(0,jsx_runtime.jsx)("p",{children:"Drop some files here ..."})]})},defaultStory.parameters={storySource:{source:"({\n  children,\n  ...rest\n}) => {\n  return <Dropzone {...rest}>{state => children(state)}</Dropzone>;\n}"}};const singleFileSelection=Template.bind({});singleFileSelection.storyName="SingleFileSelection",singleFileSelection.args={multiple:!1,children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)("p",{children:"Your file will be accepted"}),isDragReject&&(0,jsx_runtime.jsx)("p",{children:"You're trying to drop multiple files."}),!isDragActive&&(0,jsx_runtime.jsx)("p",{children:"Drop single file here ..."})]})},singleFileSelection.parameters={storySource:{source:"({\n  children,\n  ...rest\n}) => {\n  return <Dropzone {...rest}>{state => children(state)}</Dropzone>;\n}"}};const Dropzone_stories_mimeTypes=Template.bind({});Dropzone_stories_mimeTypes.storyName="MimeTypes",Dropzone_stories_mimeTypes.args={accept:ImageMimeType,children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)("p",{children:"Your file is an image"}),isDragReject&&(0,jsx_runtime.jsx)("p",{children:"Your file is not an image"}),!isDragActive&&(0,jsx_runtime.jsx)("p",{children:"Drop image file(s) here ..."})]})},Dropzone_stories_mimeTypes.parameters={storySource:{source:"({\n  children,\n  ...rest\n}) => {\n  return <Dropzone {...rest}>{state => children(state)}</Dropzone>;\n}"}};const maxSize=MaxFileSizeTemplate.bind({});maxSize.storyName="MaxSize",maxSize.args={children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)("p",{children:"File can be dropped as it matches allowed file types and number of files"}),isDragReject&&(0,jsx_runtime.jsx)("p",{children:"File cannot be dropped it does not match allowed file types or number of files"}),!isDragActive&&(0,jsx_runtime.jsx)("p",{children:"Drop a file here ..."})]})},maxSize.parameters={storySource:{source:'({\n  children,\n  onDrop\n}) => {\n  return <Dropzone maxSize={1024 ** 2} accept={ImageMimeType} multiple={false} onDrop={(acceptedFiles, fileRejections, event) => {\n    fileRejections.length && alert("File size exceeds 1MB! it will not be uploaded. Check onDrop event callback in actions panel for more info.");\n    onDrop(acceptedFiles, fileRejections, event);\n  }}>\n\t\t\t{state => children(state)}\n\t\t</Dropzone>;\n}'}};const componentMeta={title:"Components/Dropzone",parameters:{controls:{sort:"requiredFirst"}},component:Dropzone,tags:["stories-mdx"],includeStories:["defaultStory","singleFileSelection","mimeTypes","maxSize"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Dropzone",component:Dropzone,parameters:{controls:{sort:"requiredFirst"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"dropzone",children:"Dropzone"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\nDropzone is used to allow users select or drop files to upload. The component provides a standardized wrapper around the\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://react-dropzone.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Dropzone"})," library. Dropzone component is almost a headless UI helper. It does not\nprovide any UI out of the box except for a ",(0,jsx_runtime.jsx)(_components.code,{children:"div"})," with dashed borders that changes color according to ",(0,jsx_runtime.jsx)(_components.code,{children:"isDragAccept"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"isDragReject"}),"\nstate. It's up to the consumer to define the component look and feel using ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," render function that exposes dropzone\nstate."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Dropzone state:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"type DropzoneState = {\n\tisFocused: boolean;\n\tisDragActive: boolean;\n\tisDragAccept: boolean;\n\tisDragReject: boolean;\n\tisFileDialogActive: boolean;\n\tacceptedFiles: File[];\n\tfileRejections: [\n\t\t{\n\t\t\tfile: File;\n\t\t\terrors: {\n\t\t\t\tmessage: string;\n\t\t\t\tcode: string;\n\t\t\t}[];\n\t\t},\n\t];\n\trootRef: React.RefObject<HTMLElement>;\n\tinputRef: React.RefObject<HTMLInputElement>;\n} & { open: () => void };\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Dropzone exports:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Dropzone"}),": Main component"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"MimeTypes"}),": Object of all supported MIME types with file extension as a ",(0,jsx_runtime.jsx)(_components.code,{children:"key"})," and MIME type as ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ImageMimeType"}),": Array of all images MIME types"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"PdfMimeType"}),": PDF MIME type"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"MsWordMimeType"}),": Array of MS Word files MIME type"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"MsExcelMimeType"}),": Array of MS Excel files MIME type"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"CsvMimeType"}),": CSV MIME type"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Dropzone } from '@lokalise/louis';\nimport { YourStyledComponent } from './styles';\n\nexport default () => (\n\t<Dropzone>\n\t\t{({ isDragActive, isDragAccept, isDragReject, getRootProps }) => (\n\t\t\t<YourStyledComponent {...getRootProps()} isDragReject={isDragReject} isDragAccept={isDragAccept}>\n\t\t\t\t{isDragAccept && <p>All files will be accepted</p>}\n\t\t\t\t{isDragReject && <p>Some files will be rejected</p>}\n\t\t\t\t{!isDragActive && <p>Drop some files here ...</p>}\n\t\t\t</YourStyledComponent>\n\t\t)}\n\t</Dropzone>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/Wf4pR0TCW8VOyooxzpjXOU/Louis-Designer-Artifacts?type=design&node-id=7-18572&mode=design&t=fyipQ4zM85wvT7od-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Dropzone"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Dropzone}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)(_components.p,{children:"All files will be accepted"}),isDragReject&&(0,jsx_runtime.jsx)(_components.p,{children:"Some files will be rejected"}),!isDragActive&&(0,jsx_runtime.jsx)(_components.p,{children:"Drop some files here ..."})]})},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"singlefileselection",children:"SingleFileSelection"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"SingleFileSelection",args:{multiple:!1,children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)(_components.p,{children:"Your file will be accepted"}),isDragReject&&(0,jsx_runtime.jsx)(_components.p,{children:"You're trying to drop multiple files."}),!isDragActive&&(0,jsx_runtime.jsx)(_components.p,{children:"Drop single file here ..."})]})},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"mimetypes",children:"MimeTypes"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"MimeTypes",args:{accept:ImageMimeType,children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)(_components.p,{children:"Your file is an image"}),isDragReject&&(0,jsx_runtime.jsx)(_components.p,{children:"Your file is not an image"}),!isDragActive&&(0,jsx_runtime.jsx)(_components.p,{children:"Drop image file(s) here ..."})]})},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"maxsize",children:"MaxSize"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"MaxSize",args:{children:({isDragActive,isDragAccept,isDragReject,getRootProps})=>(0,jsx_runtime.jsxs)(YourStyledComponent,{...getRootProps(),isDragReject,isDragAccept,children:[isDragAccept&&(0,jsx_runtime.jsx)(_components.p,{children:"File can be dropped as it matches allowed file types and number of files"}),isDragReject&&(0,jsx_runtime.jsx)(_components.p,{children:"File cannot be dropped it does not match allowed file types or number of files"}),!isDragActive&&(0,jsx_runtime.jsx)(_components.p,{children:"Drop a file here ..."})]})},children:MaxFileSizeTemplate.bind({})})})]})}}};const Dropzone_stories=componentMeta}}]);
//# sourceMappingURL=components-Dropzone-Dropzone-stories-mdx.e52dcfc2.iframe.bundle.js.map