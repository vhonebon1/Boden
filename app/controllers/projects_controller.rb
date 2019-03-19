class ProjectsController < ApiController
  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  def index
    @projects = Project.all
    render json: @projects.to_json
  end

  # GET /projects/:id
  def show
    @project = Project.find(params[:id])
    render json: @project.to_json(:include => { :ingredients => { :only => [:id, :description] }})
  end

  def create
    @project = project.new(project_params)
    render json: @project
  end

  def destroy
    binding.pry
    @project = project.destroy(params[:id])
    render json: @project
  end

  private

  def set_project
    @project = project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :description, :url)
  end
end
