module Api::V1
  class QuestionsController < ApplicationController
    before_action :set_question, only: [:show, :update, :destroy]
  
    # GET /questions
    def index
      @questions = Question.all
  
      json_response(@questions)
    end
  
    # GET /questions/1
    def show
      json_response(@question)
    end
  
    # POST /questions
    def create
      @question = Question.create!(question_params)
      
      json_response(@question, :created)
      # if @question.save
      #   render json: @question, status: :created, location: @question
      # else
      #   render json: @question.errors, status: :unprocessable_entity
      # end
    end
  
    # PATCH/PUT /questions/1
    def update
      @question.update(question_params)

      json_response(@question)
      # if @question.update(question_params)
      #   render json: @question
      # else
      #   render json: @question.errors, status: :unprocessable_entity
      # end
    end
  
    # DELETE /questions/1
    def destroy
      @question.destroy
      head :no_content
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_question
        @question = Question.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def question_params
        params.permit(:content, :answer)
      end
  end  
end