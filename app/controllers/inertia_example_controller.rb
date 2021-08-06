class InertiaExampleController < ApplicationController
  def index
    render inertia: 'InertiaExample', props: {
      name: 'Youtube',
      user: current_user
      
    }
  end
end
