class Apiv1::ProductsMachine
  attr_accessor :params
  def initialize(params)
    @params = params
  end
  def products
    @products = _filter_pipeline.call Apiv1::Product
  end
  private
  def _filter_pipeline
    _possible_query_search >> _paginate >> _unify_type >> _process_taxons >> _process_ordering
  end
  def _possible_query_search
    -> (t) { _query.present? ? t.search(_query) : t }
  end
  def _paginate
    -> (t) { t.page(_page).per(_per_page) }
  end
  def _process_ordering
    -> (product) { product.order_by_created_at }
  end
  def _process_taxons
    -> (product) { _taxon_ids.present? ? product.involving_taxon_ids(_taxon_ids) : product }
  end
  def _unify_type
    -> (t) { t.respond_to?(:records) ? t.records.load : t }
  end
  def _query
    params[:query]
  end
  def _taxon_ids
    params[:taxons]
  end
  def _page
    params[:page] || 0
  end
  def _per_page
    params[:per] || 15
  end
end