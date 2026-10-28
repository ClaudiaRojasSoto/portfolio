class UpdateResumeToCurrentDriveFile < ActiveRecord::Migration[7.2]
  NEW_RESUME_URL = "https://drive.google.com/file/d/1Cju8DBU0Co6uzdwSoXBb-W2oSJZDcBo2/view?usp=sharing"
  PREVIOUS_RESUME_URLS = [
    "https://drive.google.com/file/d/1pMDNk6y7LTnbgBsImabGp_gum-VStCeT/view?usp=sharing",
    "/Claudia_Rojas_CV.pdf"
  ].freeze

  def up
    PREVIOUS_RESUME_URLS.each do |previous_url|
      execute <<~SQL.squish
        UPDATE profiles
        SET resume_path = #{connection.quote(NEW_RESUME_URL)}
        WHERE resume_path = #{connection.quote(previous_url)}
      SQL
    end
  end

  def down
    execute <<~SQL.squish
      UPDATE profiles
      SET resume_path = #{connection.quote(PREVIOUS_RESUME_URLS.first)}
      WHERE resume_path = #{connection.quote(NEW_RESUME_URL)}
    SQL
  end
end
