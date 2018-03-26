<template>
    <div class="row">
        <div class="large-12 medium-12 small-12 cell">
            <label>File
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
            <br>
            <progress max="100" :value.prop="uploadPercentage"></progress>
            <br>
            <button v-on:click="submitFile()">Submit</button>
        </div>
    </div>
</template>

<script>
    import * as axios from 'axios';

    export default {
        /*
        Defines the data used by the component
        */
        data() {
            return {
                file: '',
                uploadPercentage: 0
            }
        },
        methods: {
            /*
            Handles a change on the file upload
            */
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            },

            /*
            Submits the file to the server
            */
            submitFile() {
                /*
                  Initialize the form data
                */
                let formData = new FormData();

                /*
                  Add the form data we need to submit
                */
                formData.append('file', this.file);

                /*
                  Make the request to the POST /single-file URL
                */
                axios.post('http://localhost:8000/photos/upload',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        onUploadProgress: function (progressEvent) {
                            this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                        }.bind(this)
                    }
                ).then(function () {
                    console.log('SUCCESS!!');
                })
                    .catch(function () {
                        console.log('FAILURE!!');
                    });
            },
        }

    }
</script>