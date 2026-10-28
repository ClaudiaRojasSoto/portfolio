module Api
  module V1
    class PortfolioController < ApplicationController
      def show
        profile = Profile.includes(
          :proof_points,
          :skills,
          :about_values,
          :experiences,
          projects: :project_tags,
          stack_groups: :stack_items
        ).order(:id).first

        if profile.nil?
          render json: { error: "Portfolio is not available" }, status: :not_found
          return
        end

        render json: PortfolioPresenter.new(profile).as_json
      end
    end
  end
end
