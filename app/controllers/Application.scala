package controllers

import play.api.mvc.Action
import play.api.mvc.Controller

object Application extends Controller {
 
  def index = Action {
    Redirect(routes.Assets.at("old/app/index.html"))
  }

}