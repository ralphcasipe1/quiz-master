require 'rails_helper'

RSpec.describe 'Questions API', type: :request do
  let!(:questions) { create_list(:question, 10) }

  let(:id) { questions.first.id }

  describe 'GET /api/v1/questions' do
    before { get '/api/v1/questions' }

    it 'returns questions' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/v1/questions/:id' do
    before { get "/api/v1/questions/#{id}" }

    context 'when the record exists' do
      
      it 'returns question' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exists' do
      let(:id) { 1000 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a `not found message`' do
        expect(response.body).to match(/Couldn't find Question/)
      end
    end
  end

  describe 'POST /api/v1/questions' do
    let(:question) {
      { 
        content: 'How many islands in the Philippines', 
        answer: 'seven thousand six hundred forty-one' 
      }
    }

    context 'when the request is valid' do
      before { post '/api/v1/questions', params: question }

      it 'creates a question' do
        expect(json['content']).to eq('How many islands in the Philippines')
        expect(json['answer']).to eq('seven thousand six hundred forty-one')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/questions', params: { content: 'What?' } }
      
      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a `not null` validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Answer can't be blank/)
      end

      # it 'returns a `too short` validation failure message' do
      #   expect(response.body)
      #     .to match(/At least, 5 characters/)
      # end
      
      # it 'returns a `too long` validation failure message' do
      #   expect(response.body)
      #     .to match(/At most, 300 characters/)
      # end
    end
  end

  describe 'PUT /api/v1/questions/:id' do
    let(:valid_attributes) { { content: 'How many korean letters?', answer: 'twenty-four' } }

    context 'when the question exists' do
      before { put "/api/v1/questions/#{id}", params: valid_attributes }

      it 'updates the question' do
        expect(json['content']).to eq('How many korean letters?')
        expect(json['answer']).to eq('twenty-four')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /api/v1/questions/:id' do
    before { delete "/api/v1/questions/#{id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end