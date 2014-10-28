class Admin::ProductModifier
  def initialize(product, params)
    @product = product
    @raw_params = params
  end

  def update!
    _product.save!
  end

  def satisfy_specifications?
    _pictures.all?(&:valid?) && _product.valid?
  end

  private
  def _product
    @product.tap { |p| p.assign_attributes _assignable_attributes }
  end

  def _assignable_attributes
    @raw_params.permit *Apiv1::Product::Fields
  end

  def _pictures
    _pictures_factory.pictures
  end

  def _pictures_factory
    @pictures_factory ||= Admin::PicturesFactory.new @raw_params[:pictures]
  end
end
