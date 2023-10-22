import "server-only";
import supabase from "./supabase";

export async function getCareerHistory() {
  const { data, error } = await supabase.from("career_history").select("*");

  if (error) {
    throw error;
  }
  return data;
}

export async function getProjects() {
  const { data, error } = await supabase.from("project").select("*");

  if (error) {
    throw error;
  }
  return data;
}

export async function getCVInfo() {
  const { data, error } = await supabase.from("portfolio_meta").select("*");

  if (error) {
    throw error;
  }
  return data;
}
