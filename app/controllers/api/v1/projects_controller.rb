module Api::V1
  class ProjectsController < ApiController
    before_action :set_project, only: [:show, :update, :destroy]

    # GET /projects
    def index
      @projects = Project.select("id, title").all
      render json: @projects.to_json
    end

    # GET /projects/:id
    def show
      @project = Project.find(params[:id])
      render json: @project.to_json(:include => { :ingredients => { :only => [:id, :description] }})
    end

    # DELETE /projects/:id
    def destroy
      @project = Project.destroy(params[:id])
      render json: @projects
    end

    def create
      @project = Project.new(project_params)
      if @project.save
        render json: @projects
      else
        render "new"
      end
    end

    private

    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:title)
    end
  end
end
