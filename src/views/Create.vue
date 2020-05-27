<template>
  <div class=newPattern>
    <div id=createTitle>
      <h2>Save a New Pattern</h2>
    </div>
    <div class=newForm>
      <b-form @onSubmit=onSubmit() v-if="show">
        <b-form-group id="input-group-1" label="Pattern Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Enter pattern name">
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ravelry Link:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.ravelryLink"
            required
            placeholder="Enter Ravelry link">
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Description:" label-for="input-3">
          <b-form-textarea
            id="input-3"
            v-model="form.description"
            required
            placeholder="Enter short description of pattern">
          </b-form-textarea>
        </b-form-group>

        <div class="createButtons">
          <b-button @click=toggleAddProject() size="sm" variant="outline-dark">{{addProjectText}}</b-button>
        </div>
        <b-form-group id="input-group-4" v-show=addProject label="Date:" label-for="input-4">
          <b-form-datepicker id="datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
        </b-form-group>

        <b-form-group id="input-group-5" v-show=addProject label="Comment:" label-for="input-5">
          <b-form-textarea
            id="input-5"
            v-model="form.comment"
            placeholder="Enter comments about project">
            </b-form-textarea>
        </b-form-group>

        <div class="createButtons">
          <b-button v-show=addProject @click=addPicture() size="sm" variant="outline-dark">Add Picture</b-button>
        </div>

        <div v-for="(picture, index) in form.pictures" :key=index>
          <b-form-input
            v-model="picture.url"
            placeholder="Enter Link to Picture">
          </b-form-input>

          <div class="createButtons removeButton">
            <b-button @click=removePicture(picture) size="sm" variant="outline-danger">Remove Picture</b-button>
          </div>
        </div>

        <div id=saveButton>
          <b-button id="saveButton" @click=onSubmit() size="sm" variant="outline-success">Save</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<style>
  #saveButton {
    margin-top: 10px;
  }
  .removeButton {
    margin-top: 10px;
  }
  .createButtons {
    margin-bottom: 10px;
  }
  .newPattern {
    text-align: left;
    margin-left: 20px;
    padding-bottom: 30px;
  }
  .newForm {
    max-width: 75%;
  }
  #createTitle {
    color: #749799;
    margin-bottom: 20px;
  }
</style>

<script>
const API_URL = 'http://localhost:4000/patterns'

export default {
  data () {
    return {
      addProject: false,
      addProjectText: 'Add Project',
      form: {
        name: '',
        ravelryLink: '',
        date: '',
        description: '',
        projects: [],
        comment: '',
        pictures: []
      },
      show: true,
      error: ''
    }
  },

  methods: {
    addPicture () {
      this.form.pictures.push({ url: '' })
    },
    removePicture (picture) {
      var index = this.form.pictures.indexOf(picture)
      this.form.pictures.splice(index, 1)
    },
    onSubmit () {
      if (this.addProject) {
        var tempArray = []
        for (var i = 0; i < this.form.pictures.length; i++) {
          tempArray.push(this.form.pictures[i].url)
        }
        this.form.projects.push({ comment: this.form.comment, date: this.form.date, pictures: tempArray })
      }

      var formattedData = {
        name: this.form.name,
        ravelryLink: this.form.ravelryLink,
        description: this.form.description,
        projects: this.form.projects
      }
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(formattedData),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join('. ')
            this.error = error
          } else {
            this.error = ''
            this.$router.push('/patterns')
          }
        })
    },
    toggleAddProject () {
      this.addProject = !this.addProject

      if (this.addProject) {
        this.addProjectText = 'Remove Project'
      } else {
        this.addProjectText = 'Add Project'
        this.form.comment = ''
        this.form.date = ''
        this.form.projects = null
        this.form.pictures = []
      }
    }
  }
}
</script>
