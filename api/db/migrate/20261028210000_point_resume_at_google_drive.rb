class PointResumeAtGoogleDrive < ActiveRecord::Migration[7.2]
  DRIVE_RESUME_URL = "https://drive.google.com/file/d/1pMDNk6y7LTnbgBsImabGp_gum-VStCeT/view?usp=sharing"
  LOCAL_RESUME_PATH = "/Claudia_Rojas_CV.pdf"

  def up
    execute <<~SQL.squish
      UPDATE profiles
      SET resume_path = #{connection.quote(DRIVE_RESUME_URL)}
      WHERE resume_path = #{connection.quote(LOCAL_RESUME_PATH)}
    SQL
  end

  def down
    execute <<~SQL.squish
      UPDATE profiles
      SET resume_path = #{connection.quote(LOCAL_RESUME_PATH)}
      WHERE resume_path = #{connection.quote(DRIVE_RESUME_URL)}
    SQL
  end
end
